import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardTableContent from "../DashboardTable/DashboardTableContent";
import {
  ActiveUsersIcon,
  UserIcons,
  WithLoansUsersIcon,
  WithSavingsUsersIcon,
} from "../icons/DashboardIcons";
import styles from "./DashboardPageContent.module.scss";

const DashboardPageContent = () => {
  const cards = [
    { icon: <UserIcons />, title: "USERS", count: "2,453" },
    { icon: <ActiveUsersIcon />, title: "ACTIVE USERS", count: "2,453" },
    {
      icon: <WithLoansUsersIcon />,
      title: "USERS WITH LOANS",
      count: "12,453",
    },
    {
      icon: <WithSavingsUsersIcon />,
      title: "USERS WITH SAVINGS",
      count: "2,453",
    },
  ];

  return (
    <section className={`${styles.container} `}>
      <p className={`${styles.dashboard_header}`}>Users</p>
      <div className={`${styles.card_container}`}>
        {cards.map((data, i) => (
          <DashboardCard
            key={i}
            icon={data.icon}
            title={data.title}
            count={data.count}
          />
        ))}
      </div>
      <DashboardTableContent/>
    </section>
  );
};

export default DashboardPageContent;
