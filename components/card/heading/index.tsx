import Image from 'next/image';

const CardHeading: React.FC<{
  title: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ title, imageSrc, imageAlt }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
      >
        <div style={{ marginRight: '10px' }}>
          <Image src={imageSrc} alt={imageAlt} width={25} height={20} />
        </div>
        <div
          style={{
            flexGrow: 1,
            fontWeight: 600,
            fontSize: '16.74px',
            color: '#1B1B1B',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: 400,
            fontSize: '12px',
            color: '#000000',
            marginLeft: '20px',
          }}
        >
          View More
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CardHeading;
