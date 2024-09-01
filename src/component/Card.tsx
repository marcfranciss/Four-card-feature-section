import "./card.css";
interface CardProps {
  header: string;
  para: string;
  icon: string;
  colorScheme?: string;
}

export const Card = ({ header, para, icon, colorScheme }: CardProps) => {
  return (
    <div className='cards' style={{ borderTop: `4px solid ${colorScheme}` }}>
      <h3>{header}</h3>
      <p>{para}</p>
      <img src={icon} alt={header} />
    </div>
  );
};
