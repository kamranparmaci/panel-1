import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'

import { CardMedia, Typography } from '@mui/material'
import { CheckRounded, CloseRounded } from '@mui/icons-material'
import EnhancedTableHead from './enhanced-table-head'
import rows from '../../assets/data/TableData'
import EnhancedTableToolbar from './enhanced-table-toolbar'

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const EnhancedTable = () => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('customer')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    if (search && search !== '') {
      setTableData(
        rows.filter(
          (row) =>
            row.customer.toLowerCase().includes(search.toLowerCase()) ||
            row.total.toString().includes(search) ||
            row.product.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setTableData(rows)
    }
  }, [search])

  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.customer)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (_event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (_event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={6} sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          search={search}
          setSearch={setSearch}
        />
        {!tableData?.length ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60vh',
            }}
          >
            <Typography variant="h6">موردی یافت نشد</Typography>
          </Box>
        ) : (
          <TableContainer sx={{ maxHeight: '60vh' }}>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(tableData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.customer)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.customer)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.customer}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell align="left" sx={{ minWidth: '175px' }}>
                          {row.customer}
                        </TableCell>
                        <TableCell align="right" sx={{ minWidth: '100px' }}>
                          {row.orderId}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ display: 'flex', minWidth: '100px' }}
                        >
                          <CardMedia
                            component="img"
                            image={row.photo}
                            sx={{
                              width: '20px',
                              height: '30px',
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ minWidth: '100px' }}>
                          {row.product}
                        </TableCell>
                        <TableCell align="right" sx={{ minWidth: '100px' }}>
                          {row.total}
                        </TableCell>
                        <TableCell align="right" sx={{ minWidth: '100px' }}>
                          {row.is5G ? (
                            <CheckRounded color="success" />
                          ) : (
                            <CloseRounded color="error" />
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default EnhancedTable
