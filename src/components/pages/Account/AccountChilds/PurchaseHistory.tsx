import styles from "../Account.module.scss";
// import { ITea } from "../../../../models/ITea";
const PurchaseHistory = () => {
  // const [storyOfPurchase, setStoryOfPurchase] = useState<ITea[]>([]);

  return (
    <div className={styles.accountBodyContent}>
      <h3 className={styles.accountPageHeader}>История покупок</h3>
      {/* {!storyOfPurchase.length */}
      {!null ? <p>Вы не совершали никаких покупок</p> : "фывфы"}
    </div>
  );
};

export default PurchaseHistory;
