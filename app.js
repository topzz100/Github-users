const gitHub = new GitHub;
const client = new Client;

const input = document.querySelector('.search');
input.addEventListener('keyup', (e) => {
  const content = e.target.value;
gitHub.getUser(content).then(data => {
  
  if(data.profile.message !== "Not Found"){
    client.showProfile(data.profile);
    client.showRepos(content, data.repos)
    
  }else{
    client.clearProfile()
    client.clearRepos()
  }
} );

 
})