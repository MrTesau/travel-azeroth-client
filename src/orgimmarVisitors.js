import React from "react";
import cx from "clsx";
//import NoSsr from "@material-ui/core/NoSsr";
//import GoogleFontLoader from "react-google-font-loader";
import Avatar from "@material-ui/core/Avatar";
//import Button from "@material-ui/core/Button";
//import Divider from "@material-ui/core/Divider";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { /*Column,*/ Row, Item } from "@mui-treasury/components/flex";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

const usePersonStyles = makeStyles(() => ({
  text: {
    fontFamily: "Arial",
    whiteSpace: "wrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  name: {
    fontWeight: 500,
    fontSize: "0.8rem",
    color: "#122740",
  },
  caption: {
    fontSize: "0.75rem",
    color: "#122740",
    marginTop: 1,
    fontFamily: "Arial",
  },
  btn: {
    borderRadius: 20,
    padding: "0.125rem 0.75rem",
    borderColor: "#becddc",
    fontSize: "0.75rem",
  },
}));

const PersonItem = ({ src, name, travelDescription }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  const styles = usePersonStyles();
  return (
    <Row gap={2} p={0.1}>
      <Item>
        <Avatar classes={avatarStyles} src={src} />
      </Item>
      <Row wrap gap={0.1} minWidth={2}>
        <Item minWidth={0}>
          <div className={cx(styles.name, styles.text)}>{name}</div>

          <div className={cx(styles.caption, styles.text)}>
            {travelDescription}
          </div>
        </Item>
      </Row>
    </Row>
  );
};
/*
const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    overflow: "hidden",
  },
  header: {
    fontFamily: "Barlow, san-serif",
    backgroundColor: "#fff",
  },
  headline: {
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
}));
*/
/* Full Social Card (Might need later)
const SocialCardDemo = React.memo(function SocialCard() {
  const styles = useStyles();
  return (
    <>
    <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
      </NoSsr> 
      <Column p={0} gap={0} className={styles.card}>
        <PersonItem
          name={"Woogy"}
          travelDescription={"Favourite Hangout"}
          src={"https://i.pravatar.cc/300?img=10"}
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={"Diablo Spawn"}
          travelDescription={"City of Birth"}
          src={"https://i.pravatar.cc/300?img=20"}
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={"Starindas"}
          travelDescription={
            "Attacked the City, Attempted to kill Thrall. Failed"
          }
          src={"https://i.pravatar.cc/300?img=30"}
        />
      </Column>
    </>
  );
});
*/
export default PersonItem;
