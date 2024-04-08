import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      "& .MuiInputLabel-formControl, .MuiListItem-button": {
        fontFamily: "'__Montserrat_f3ee7c', '__Montserrat_Fallback_f3ee7c'!important",
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const options = [
    {
        value: '',
        label: 'Bỏ lọc'
    },
    {
        value: 0,
        label: 'Dưới 2 triệu',
    },
    {
        value: 2,
        label: 'Từ 2 đến 5 triệu',
    },
    {
        value: 5,
        label: 'Từ 5 đến 10 triệu',
    },
    {
        value: 10,
        label: 'Trên 10 triệu',
    }
];
export default function FilterForm() {
    const classes = useStyles();
    const [priceRange, setPriceRange] = React.useState(null);

    const handleSelectPrice = (event) => {
        setPriceRange(event.target.value);
    };
    

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">GIÁ</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priceRange}
                    onChange={handleSelectPrice}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}