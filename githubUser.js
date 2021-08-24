class GitHub{
  constructor(){
     this.clientId = 'efacf5311b2e56584ac3'
     this.clientSecret ='9710c24f3c057c830fce730d8905e5a4ac3b1349'
     this.repos_count = 5
     this.repos_sort = 'created: asc' 
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    }
  }
}