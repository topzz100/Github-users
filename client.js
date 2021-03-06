const profile = document.querySelector('.profile')
const repositories = document.querySelector('.repo')
class Client {
  constructor(){
    
  }
  showProfile(user){
    const output = 
    `<div class = "profile-container">
      <div class ="img-box"> 
        <img src ="${user.avatar_url}">
      </div>
    
      <div class = "profile-info"> 
    
          <p> Name: ${user.name}</p>
        
        
          <p> email: ${user.email}</p>
        
        
          <p> following: ${user.following}</p>
        
        
          <p> followers: ${user.followers}</p>

      
      
    </div>`

    profile.innerHTML = output;
  }
  showRepos(user, repos){
    let output = '';

    repos.forEach(repo => {
      output += `<p><a href = "https://github.com/${user}/${repo.name}"> ${repo.name}</a></p>`
    });   
   

    repositories.innerHTML = output;
  }
  clearProfile(){
    profile.innerHTML = '';
  }
  clearRepos(){
    repositories.innerHTML = '';
  }
}