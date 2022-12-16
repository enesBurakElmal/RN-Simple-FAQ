
[![Issues][issues-shield]][https://github.com/enesBurakElmal/rn-simply-faq/issues]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][https://tr.linkedin.com/in/enes-burak-elmal-021099182?trk=public_profile_browsemap]




<h3 align="center">Simple FAQ Components</h3>

  <p align="center">
    This package created for React Native platform.
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/enesBurakElmal/rn-simply-faq/issues">Report Bug</a>
    ·
    <a href="https://github.com/enesBurakElmal/rn-simply-faq/issues">Request Feature</a>
  </p>
</div>






<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]




<!-- GETTING STARTED -->
## Getting Started

As with the package name, it's simple! Let's keep going..

### Prerequisites

First of all, run terminal with:
* npm
  ```sh
 npm i rn-simple-faq@latest
  ```
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To basically, your faq array include 2 parameter: **"question"** and **"answer"**. 
  
  Simple array:
  
  (`
  const arr = [
  {
  "id":0,
  "question":"Lorem ipsum",
  "answer":"Dip samet"
  },
  {
   "id":1,
  "question":"Lorem ipsum sit amet",
  "answer":"Dip samet lorem ipsum"
  }
  ]
  `)

##Simple component usage:
(`
  <FaqComponent
          faqData={arr}
          containerStyle={{ backgroundColor: '#131313' }}
          faqItemStyle={{}}
          controllerIconStyle={{
            right: 0,
            width: 30,
            height: 30,
            top: 0,
          }}
        />
        `)
        
        ##Parameters:
        (`
        faqData = array format, this your FAQ data
        containerStyle = string format, main container style
        faqItemStyle = string format, only one faq item style
        controllerIconStyle = string format, open-close controller style
        questionStyle = string format, question text style
        answerStyle= string format, answer text style
         `)

<!-- CONTACT -->
## Contact

Enes Burak Elmal - [@twitter_handle](https://twitter.com/atanalirabi) - enesb.elmal@gmail.com

Project Link: [https://github.com/enesBurakElmal/rn-simply-faq](https://github.com/enesBurakElmal/rn-simply-faq)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
