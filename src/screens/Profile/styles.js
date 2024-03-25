import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2E3E6"
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  user: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
    width: 600,
    textAlign: "center"
  },
  userDetail: {
    marginBottom: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FF6347",
    minWidth: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
