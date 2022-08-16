import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface IProps {}

const Loader: React.FC<IProps> = ({}) => {
  return (
    <div className={styles.fall_back_container}>
      <Circles color="#3f51b5" />
    </div>
  );
};

export default Loader;
