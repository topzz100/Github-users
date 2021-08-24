const profile = document.querySelector('.profile')
const repositories = document.querySelector('.repo')
class Client {
  constructor(){
    
  }
  showProfile(user){
    const output = 
    `<div class = "profile-containe">
    
      <div class = "name">
        <p> Name: ${user.name}</p>
      </div>
      <div class = "email">
        <p> email: ${user.email}</p>
      </div>
      <div class = "following">
        <p> following: ${user.following}</p>
      </div>
      <div class = "followers">
        <p> following: ${user.followers}</p>
      </div>
    
      
    </div>`

    profile.innerHTML = output;
  }
  showRepos(repos){
    let output = '';

    Jrepos.forEach(repo => {
      output += `<div class = "repo-container">
      <div class = "name">
        <p> Name: ${repo.name}</p>
      </div>  
    </div>`
    });   
   

    repositories.innerHTML = output;
  }
  clearProfile(){
    profile.innerHTML = '';
  }
}