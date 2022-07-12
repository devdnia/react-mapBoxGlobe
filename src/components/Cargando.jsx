import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Cargando = () => {
    return (
        <Box
            sx={{
                padding: '20px',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',

            }}
            >
            <LinearProgress
                color='secondary'
            />
            <Typography
                sx={{
                    fontSize: '1.5rem',
                    marginLeft: '05rem',
                }}
            >
                Cargando...
            </Typography>


        </Box>
    )

}
