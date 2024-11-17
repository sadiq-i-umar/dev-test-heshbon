import { ReactNode } from 'react';
import CardHeading from './heading';

const DashboardCard: React.FC<{
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}> = ({ title, imageSrc, imageAlt, children }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFF',
        padding: '15px 20px 20px 20px',
        border: '1.13px solid #E4E7EC',
        borderRadius: '20px',
        height: '100%',
      }}
    >
      <CardHeading title={title} imageSrc={imageSrc} imageAlt={imageAlt} />
      <div>{children}</div>
    </div>
  );
};

export default DashboardCard;
