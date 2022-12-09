import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Popover,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'

const EnhancedTableToolbar = ({ numSelected, search, setSearch }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Latest Order
        </Typography>
      )}

      <IconButton onClick={handleClick}>
        <FilterListIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 1.5 }}>
          <TextField
            fullWidth
            variant="standard"
            label="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Popover>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

export default EnhancedTableToolbar
