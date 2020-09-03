import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (user){
    var country = {name: user['https://test.com/country'], code: user['https://test.com/country_code']};
  } else {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var errorMessage = url.searchParams.get("error_description");
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
          <div>
          <img className='addMargin' height="120px" src={user.picture} alt={user.name} />
          
          <img className='addMargin' height="120px"  src={" https://flagcdn.com/w2560/" + user["https://test.com/country_code"].toLowerCase() + ".png"} />
  
          {country.name ?
            <div>
              This user is from {user["https://test.com/country"]}
            </div>
           :  
            <div>
              We don't know where this user is from. 
            </div>
          }
          <h2>User's Name is: {user.name}</h2>
          <p>User's Email is: {user.email}</p>
        </div>
      )

      :
      
      <div>
        {errorMessage}
      </div>

      }
    </div>
  );
};

export default Profile;