//Alter the information below for customizantion.
const linksSocialMedia = {
  github: 'Kaio-Cesar',
  youtube: 'UCOpfLiUSU3z0KbZZblaf8yQ',
  facebook: 'kaio.cesar.9256028',
  instagram: 'kaio.cesar0',
  twitter: 'escark_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userNick.textContent = data.login
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
