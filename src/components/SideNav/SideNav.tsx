import { ChevronDown } from "lucide-react";
import {
  DashboardIcon,
  DecisionIcon,
  GuarantorsIcon,
  KarmaIcon,
  LoanIcon,
  LoansIcon,
  SavingsIcon,
  SwitchIcon,
  UsersIcon,
  WhiteListIcon,
} from "../icons/CustomerSectionIcons";
import styles from "./SideNav.module.scss";
import {
  FeesandChargesIcon,
  ReportsIcon,
  SavingsProductIcon,
  ServiceAccountIcon,
  ServicesIcon,
  SettlementIcon,
  TransactionIcon,
} from "../icons/BussinessSectionIcons";
import {
  AuditLogsIcon,
  FeesandPricingIcon,
  PreferencesIcon,
} from "../icons/SettingsSectionIcon";
import { Logout, Tire } from "../icons/Others";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className={`${styles.nav} hide_scroll`}>
      <div className={`${styles.nav_firstgroup}`}>
        <SwitchIcon />
        <p>Switch organization</p>
        <ChevronDown />
      </div>
      <TextHelper
        className={`${styles.head}`}
        svg={<DashboardIcon />}
        text="Dashboard"
      />
      <p className={`${styles.nav_sections}`}>CUSTOMERS</p>

      <TextHelper
        svg={<UsersIcon />}
        text={"Users"}
        className={`${styles.nav_active}`}
      />
      <TextHelper svg={<GuarantorsIcon />} text={"Guarantors"} />
      <TextHelper svg={<LoansIcon />} text={"Loans"} />
      <TextHelper svg={<DecisionIcon />} text={"Decision Models"} />
      <TextHelper svg={<SavingsIcon />} text={"Savings"} />
      <TextHelper svg={<LoanIcon />} text={"Loan Requests"} />
      <TextHelper svg={<WhiteListIcon />} text={"Whitelist"} />
      <TextHelper svg={<KarmaIcon />} text={"Karma"} />
      <p className={`${styles.nav_sections}`}>BUSINESSES</p>
      <TextHelper svg={<SwitchIcon />} text={"Organization"} />
      <TextHelper svg={<LoansIcon />} text={"Loan Products"} />
      <TextHelper svg={<SavingsProductIcon />} text={"Savings Products"} />
      <TextHelper svg={<FeesandChargesIcon />} text={"Fees and Charges"} />
      <TextHelper svg={<TransactionIcon />} text={"Transactions"} />
      <TextHelper svg={<ServicesIcon />} text={"Services"} />
      <TextHelper svg={<ServiceAccountIcon />} text={"Service Account"} />
      <TextHelper svg={<SettlementIcon />} text={"Settlements"} />
      <TextHelper svg={<ReportsIcon />} text={"Reports"} />
      <p className={`${styles.nav_sections}`}>SETTINGS</p>
      <TextHelper svg={<PreferencesIcon />} text={"Preferences"} />
      <TextHelper svg={<FeesandPricingIcon />} text={"Fees and Pricing"} />
      <TextHelper svg={<AuditLogsIcon />} text={"Audit logs"} />
      <TextHelper svg={<Tire />} text={"Systems Messages"} />
      <div className={`${styles.nav_texthelper} ${styles.logout}`}>
        <Logout />
        <Link href={"/"}>Logout</Link>
      </div>
      <p className={`${styles.final_text}`}>v1.2.0</p>
    </div>
  );
};

export default SideNav;
const TextHelper = ({
  svg,
  text,
  className,
}: {
  svg: React.ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`${styles.nav_texthelper} ${className}`}>
      {svg}
      <p>{text}</p>
    </div>
  );
};
