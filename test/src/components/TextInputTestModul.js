// SPDX-License-Identifier: MIT
import * as React from 'react'
import {
  Button,
  TextField,
  InputAdornment,
  Grid,
  Typography,
  Stack,
  FormControl,
  InputLabel,
  Input,
  Box,
  OutlinedInput,
  FormHelperText,
  IconButton,
  FilledInput,
} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { scaledSpacing } from '@daimler/productkit-react'

export default function TextInputTestModul() {
  const [value, setValue] = React.useState('Controlled')
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleSimpleChange = (event) => {
    setValue(event.target.value)
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <section className="component-section">
      <div className="section-header">
        <Button startIcon={<OpenInNewIcon />}>
          <a
            href="https://material.io/design/components/text-fields.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Text field
          </a>
        </Button>
      </div>
      {/* Basic */}
      <Grid container sx={{ ...scaledSpacing('mt', 'xxs') }} rowGap={4}>
        {/* Primary */}
        <Grid item xs={12}>
          <Typography variant="subtitle2">Primary</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            fullWidth
          />
        </Grid>
        {/* Secondary */}
        <Grid item xs={12}>
          <Typography variant="subtitle2">Secondary</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            color="secondary"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container sx={{ ...scaledSpacing('mt', 'l') }} rowGap={4}>
        {/* Form Props */}
        {/* Outlined */}
        <Grid item xs={12}>
          <Typography variant="subtitle2">Form Props Primary</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
          />
        </Grid>
        {/* Filled */}
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
            variant="filled"
          />
        </Grid>
        {/* Standard */}
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ ...scaledSpacing('mt', 'l') }} rowGap={4}>
        {/* Form Props */}
        {/* Outlined */}
        <Grid item xs={12}>
          <Typography variant="subtitle2">Form Props Secondary</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
            color="secondary"
          />
        </Grid>
        {/* Filled */}
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
            color="secondary"
            variant="filled"
          />
        </Grid>
        {/* Standard */}
        <Grid item xs={12}></Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Validation
      </Typography>
      <Grid container rowGap={4}>
        <Grid item xs={2}>
          <TextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Multiline Primary
      </Typography>
      <Grid container rowGap={4}>
        <Grid item xs={4}>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleSimpleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Multiline Secondary
      </Typography>
      <Grid container rowGap={4}>
        <Grid item xs={4}>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="standard"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
            fullWidth
            color="secondary"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
            fullWidth
            color="secondary"
          />
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Icons
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="With sx"
              variant="standard"
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Input Adornments Primary
      </Typography>
      {/* Outlined */}
      <Grid container rowGap={4}>
        <Grid item xs={4}>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl
            sx={{ m: 1, width: '25ch' }}
            variant="outlined"
            fullWidth
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </Grid>
      </Grid>
      {/* Filled */}
      <Grid container rowGap={4} sx={{ ...scaledSpacing('mt', 'm') }}>
        <Grid item xs={4}>
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            variant="filled"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <FilledInput
              id="filled-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="filled-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      {/* Standard */}
      <Grid container rowGap={4} sx={{ ...scaledSpacing('mt', 'm') }}>
        <Grid item xs={4}>
          <TextField
            label="With normal TextField"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
            <Input
              id="standard-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={values.amount}
              onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle2"
        sx={{ ...scaledSpacing('mt', 'l'), ...scaledSpacing('mb', 's') }}
      >
        Sizes
      </Typography>
      <Grid container rowGap={4}>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="outlined-size-normal"
            defaultValue="Normal"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="filled-size-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="filled-size-normal"
            defaultValue="Normal"
            variant="filled"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="standard-size-small"
            defaultValue="Small"
            size="small"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Size"
            id="standard-size-normal"
            defaultValue="Normal"
            variant="standard"
          />
        </Grid>
      </Grid>
    </section>
  )
}
