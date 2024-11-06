import { ArrowLeft, Star } from "lucide-react";
import styles from "./UserDetails.module.scss";
import Avatar from "../../assets/avatar0.png";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { User } from "@/types";
import { Button } from "@/components/ui/button";
const UserDetailsSection = () => {
  const [details, setDetails] = useState<User | null>(null);
  const [firstDetails] = useLocalStorage("details", null);
  const params = new URLSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const handleGoBack = () => {
    params.delete("section");
    router.push(`${pathName}?${params.toString()}`);
  };
  useEffect(() => {
    if (firstDetails) setDetails(firstDetails);
  }, [firstDetails]);
  const personalInfo = details?.personalInformation;
  const employmentDetails = details?.educationAndEmployment;
  return (
    <div className={`${styles.container}`}>
      <div onClick={handleGoBack} className={`${styles.back_button}`}>
        <ArrowLeft />
        <p>Back to users</p>
      </div>
      <div className={`${styles.header_container}`}>
        <p>User Details</p>
        <div className={`${styles.header_buttons_container}`}>
          <Button className={`${styles.header_buttons_one}`}>
            BLACKLIST USER
          </Button>
          <Button className={`${styles.header_buttons_two}`}>
            ACTIVATE USER
          </Button>
        </div>
      </div>
      <div className={`${styles.headline}`}>
        <div className={`${styles.headline_main}`}>
          <Image src={Avatar} width={100} height={100} alt="avatar" />
          <div className={`${styles.headline_name}`}>
            <h2>{personalInfo?.fullName}</h2>
            <p>LSQFf587g90</p>
          </div>
          <div className={`${styles.headline_user_tier}`}>
            <p>{`User's Tier`}</p>
            <div className={`${styles.headline_star_section}`}>
              {Array.from({ length: 3 }, (_, i) => (
                <Star
                  color="#E9B200"
                  fill={`${i == 0 ? "#E9B200" : "#FFFFFF"}`}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className={`${styles.headline_money_container}`}>
            <h2>₦200,000. 00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className={`${styles.headline_nav}`}>
          {[
            "General Details",
            "Documents",
            "Bank Details",
            "Loans",
            "Savings",
            "App and System",
          ].map((data, i) => (
            <p className={`${i == 0 && styles.headline_nav_active}`} key={data}>
              {data}
            </p>
          ))}
        </div>
      </div>
      <div className={`${styles.main_details}`}>
        <div className={`${styles.main_details_section}`}>
          <h2>Personal information </h2>
          <div
            className={`${styles.main_details_group_container} ${styles.main_details_group_container_one}`}
          >
            <TextHelper heading="FULL NAME" detail={personalInfo?.fullName} />
            <TextHelper heading="PHONE NUMBER" detail={personalInfo?.phone} />
            <TextHelper heading="EMAIL ADDRESS" detail={personalInfo?.email} />
            <TextHelper heading="BVN" detail={personalInfo?.bvn} />
            <TextHelper heading="GENDER" detail={personalInfo?.gender} />
            <TextHelper
              heading="MARITAL STATUS"
              detail={personalInfo?.maritalStatus}
            />
            <TextHelper heading="CHILDREN" detail={personalInfo?.children} />
            <TextHelper
              heading="TYPE OF RESIDENCE"
              detail={personalInfo?.typeOfResidence}
            />
          </div>
        </div>
        <div className={`${styles.main_details_section}`}>
          <h2>Education and Employment </h2>
          <div
            className={`${styles.main_details_group_container} ${styles.main_details_group_container_two}`}
          >
            <TextHelper
              heading="LEVEL OF EDUCATION"
              detail={employmentDetails?.levelOfEducation}
            />
            <TextHelper
              heading="EMPLOYMENT STATUS"
              detail={employmentDetails?.employmentStatus}
            />
            <TextHelper
              heading="SECTOR OF EMPLOYMENT"
              detail={employmentDetails?.sector}
            />
            <TextHelper
              heading="DURATION OF EMPLOYMENT"
              detail={employmentDetails?.duration}
            />
            <TextHelper
              heading="OFFICE EMAIL"
              detail={employmentDetails?.officeemail}
            />
            <TextHelper
              heading="MONTHLY INCOME"
              detail={employmentDetails?.monthlyIncome}
            />
            <TextHelper
              heading="LOAN REPAYMENT"
              detail={employmentDetails?.loanRepayment}
            />
          </div>
        </div>
        <div className={`${styles.main_details_section}`}>
          <h2>Socials </h2>
          <div
            className={`${styles.main_details_group_container} ${styles.main_details_group_container_three}`}
          >
            <TextHelper heading="TWITTER" detail={details?.socials?.twitter} />
            <TextHelper
              heading="FACEBOOK"
              detail={details?.socials?.faceBook}
            />
            <TextHelper
              heading="INSTAGRAM"
              detail={details?.socials?.instagram}
            />
          </div>
        </div>
        <div className={`${styles.main_details_section}`}>
          <h2>Guarantor </h2>
          <div
            className={`${styles.main_details_group_container} ${styles.main_details_group_container_two}`}
          >
            <TextHelper
              heading="FULL NAME"
              detail={details?.guarantor?.fullName}
            />
            <TextHelper
              heading="PHONE NUMBER"
              detail={details?.guarantor?.phone}
            />
            <TextHelper
              heading="EMAIL ADDRESS"
              detail={details?.guarantor?.email}
            />
            <TextHelper
              heading="RELATIONSHIP"
              detail={details?.guarantor?.relationship}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSection;
const TextHelper = ({
  heading,
  detail,
}: {
  heading: string;
  detail: string | undefined;
}) => {
  return (
    <div className={`${styles.text_helper}`}>
      <p>{heading}</p>
      <h3>{detail}</h3>
    </div>
  );
};
