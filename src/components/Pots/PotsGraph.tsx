import { Stack } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import { useTheme } from '@mui/material/styles';

const PotsGraph = () => {
    const theme = useTheme();
  return (
    <Stack borderRadius={3}>
      <BarChart
            xAxis={[
              { 
                scaleType: 'band', 
                data: ['Entertainment', 'Bills', 'Dining', 'Personal Care', 'Groceries', 'Transport'],
                disableLine: true,
                tickLabelStyle: {
                  fill: theme.palette.text.primary,
                  fontWeight: 'bold',
                  fontSize: 12
                }
              }
            ]}
            yAxis={[
              {
                disableLine: true,
                tickLabelStyle: {
                  fill: theme.palette.text.secondary,
                  fontSize: 10
                }
              }
            ]}
            series={[
              { 
                data: [45, 750, 75, 100, 320, 120], 
                color: '#FFB8E0',
                label: 'Q1 2023',
                highlightScope: { highlighted: 'item', faded: 'global' }
              },
              { 
                data: [65, 680, 95, 120, 280, 150], 
                color: '#7A73D1',
                label: 'Q2 2023',
                highlightScope: { highlighted: 'item', faded: 'global' }
              },
              { 
                data: [55, 820, 110, 90, 350, 140], 
                color: '#0099ff',
                label: 'Q3 2023',
                highlightScope: { highlighted: 'item', faded: 'global' }
              },
              { 
                data: [70, 790, 105, 115, 380, 160], 
                color: '#ff6600',
                label: 'Q4 2023',
                highlightScope: { highlighted: 'item', faded: 'global' }
              },
              { 
                data: [60, 850, 125, 130, 400, 180], 
                color: '#ff3399',
                label: 'Q1 2024',
                highlightScope: { highlighted: 'item', faded: 'global' }
              },
              { 
                data: [80, 880, 140, 110, 420, 200], 
                color: '#A4B465',
                label: 'Q2 2024',
                highlightScope: { highlighted: 'item', faded: 'global' }
              }
            ]}
            // width={700}
            height={400}
            margin={{ top: 40, bottom: 40, left: 50, right: 30 }}
            slotProps={{
              bar: {
                rx: 23,
                ry:18,
                height: 20,
                style: { strokeWidth: 0.5, stroke: theme.palette.divider }
              },
              legend: {
                direction: 'row',
                position: { vertical: 'top', horizontal: 'right' },
                padding: { top: 10, bottom: 20 },
                itemMarkWidth: 14,
                itemMarkHeight: 14,
                labelStyle: {
                  fontSize: 12,
                  fontWeight: 'bold'
                }
              }
            }}
            colors={['#FFB8E0', '#7A73D1', '#0099ff', '#ff6600', '#ff3399', '#A4B465']}
            sx={{
              '& .MuiChartsAxis-directionX': {
                [theme.breakpoints.down('sm')]: {
                  display: 'none'
                }
              },
              '& .MuiBarElement-root': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 0.85,
                  transform: 'scaleY(1.08)'
                }
              },
              backgroundColor: theme.palette.background.paper,
              borderRadius: '14px',
              boxShadow: theme.shadows[4],
              p: 3,
              border: `1px solid ${theme.palette.divider}`
            }}
          />
    </Stack>
  )
}

export default PotsGraph
