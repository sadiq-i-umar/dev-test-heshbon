import StatusPill from '@/components/pills/status';
import { Status } from '@/types';

const TimeOffRequest: React.FC<{
  dotColor: string;
  date: string;
  requestType: string;
  status: Status;
}> = ({ dotColor, date, requestType, status }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <div
        style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: dotColor,
          marginRight: '10px',
        }}
      ></div>
      <div style={{ flexGrow: 1 }}>
        <span
          style={{ fontWeight: 600, fontSize: '14px', color: '#1A1919' }}
        >{`${date}`}</span>{' '}
        <span style={{ fontWeight: 400, fontSize: '10px', color: '#1A1919' }}>
          {`(${requestType})`}
        </span>
      </div>
      <div>
        <StatusPill status={status} />
      </div>
    </div>
  );
};

export default TimeOffRequest;
