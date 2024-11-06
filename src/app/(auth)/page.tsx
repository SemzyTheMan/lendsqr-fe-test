import AuthPageContent from "@/components/Auth/AuthPageContent";
import styles from "./Login.module.scss";

const Page = () => {
  return (
    <div className={`${styles.container}`}>
      <AuthPageContent />
    </div>
  );
};

export default Page;
