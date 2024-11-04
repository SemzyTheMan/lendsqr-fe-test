import styles from "./DashboardCard.module.scss";

const DashboardCard = ({
  icon,
  title,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  count: string;
}) => {
  return (
    <div className={`${styles.card_container}`}>
      {icon}
      <p className={`${styles.card_title}`}>{title}</p>
      <p className={`${styles.card_count}`}>{count}</p>
    </div>
  );
};

export default DashboardCard;
