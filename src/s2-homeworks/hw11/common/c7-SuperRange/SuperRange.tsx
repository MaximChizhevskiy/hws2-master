import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{// стили для слайдера // пишет студент
                color: '#00cc22',
                height: 7,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#ffffff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    }
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
