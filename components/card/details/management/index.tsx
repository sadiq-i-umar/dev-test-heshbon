import { Stack } from '@mui/material';

const ManagementCardDetails: React.FC<{
  details: { title: string; body: string }[];
}> = ({ details }) => {
  return (
    <Stack gap={2}>
      {details.map((detail, index) => (
        <div key={index}>
          <div style={{ color: '#1B1B1B', fontWeight: 400, fontSize: '14px' }}>
            {detail.title}
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: '15px',
              ...(detail.title === 'Status'
                ? { color: '#107C41' }
                : { color: '#1B1B1B' }),
            }}
          >
            {detail.body}
          </div>
        </div>
      ))}
    </Stack>
  );
};

export default ManagementCardDetails;
