import { Status } from '@/types';
import { Box } from '@mui/material';

const StatusPill: React.FC<{ status: Status }> = ({ status }) => {
  return (
    <Box
      sx={{
        borderRadius: '12px',
        ...(status === Status.approved && { backgroundColor: '#E7F6EC' }),
        ...(status === Status.rejected && { backgroundColor: '#FBEAE9' }),
        ...(status === Status.pending && { backgroundColor: '#FFF5E6' }),
        ...(status === Status.approved && { color: '#036B26' }),
        ...(status === Status.rejected && { color: '#9E0A05' }),
        ...(status === Status.pending && { color: '#B56D00' }),
        textTransform: 'capitalize',
        // paddingX: '10px',
        fontSize: '14px',
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 600,
      }}
    >
      {status}
    </Box>
  );
};

export default StatusPill;
