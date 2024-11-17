import { Avatar, Stack } from '@mui/material';

const ProfileCardDetails = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
      }}
    >
      <Stack gap={0.5}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Avatar
            src='/account/sadiq.png'
            style={{
              width: '85px',
              height: '85px',
              border: '3px solid #0035C3',
            }}
          />
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '16.74px',
            color: '#1B1B1B',
            fontWeight: 700,
          }}
        >
          Sadiq Umar
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#1B1B1B',
            fontWeight: 400,
          }}
        >
          React Developer
        </div>
      </Stack>
    </div>
  );
};

export default ProfileCardDetails;
