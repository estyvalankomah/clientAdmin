import "./newUser.css";
import { Grid } from "@material-ui/core";

export default function NewUser() {
  return (
    <div className="newUser">
      <div className="newUserCard">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Firstname</label>
                  <input type="text" required/>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Lastname</label>
                  <input type="text" required/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Phone</label>
                  <input type="text" required />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Address</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>DOB</label>
                  <input type="date"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                  </div>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className="newUserItem">
                  <label>Status</label>
                  <select className="newUserSelect" name="active" id="active">
                    <option value="staff">Staff</option>
                    <option value="no">Student</option>
                    <option value="no">Guest</option>
                  </select>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <button className="newUserButton">Create User</button>
        </form>
      </div>
    </div>
  );
}
