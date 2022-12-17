  Now, just for beta!
  
  `npm i rn-simple-faq@latest`
  
  <img width="320" alt="image" src="https://user-images.githubusercontent.com/92387865/208238273-82d7d515-05a3-4725-b01e-6371ed17f996.png">

  <img width="320" alt="image" src="https://user-images.githubusercontent.com/92387865/208238265-97fae8c4-93ae-4ed6-a330-3377251d856a.png">

  
  To basically, your faq array include 2 parameter: **"question"** and **"answer"**. 
  
  **Simple array:**
  
    -----
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
    -----
  
  
  **Simple Component  Usage:**
  
    ------
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
          -----
          
 **Parameters:**        
          
        --------
        faqData = array format, this your FAQ data
        containerStyle = string format, main container style
        faqItemStyle = string format, only one faq item style
        controllerIconStyle = string format, open-close controller style
        questionStyle = string format, question text style
        answerStyle= string format, answer text style
        --------
