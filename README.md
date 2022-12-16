      Now, just for beta!
      
      npm i rn-simple-faq@latest
      
      To basically, your faq array include 2 parameter: "question" and "answer". 
      
      Simple array:
      
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
      
      Simple component usage:
      
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
            
            --------
            Parameters 
            faqData = array format, this your FAQ data
            containerStyle = string format, main container style
            faqItemStyle = string format, only one faq item style
            controllerIconStyle = string format, open-close controller style
            questionStyle = string format, question text style
            answerStyle= string format, answer text style
            --------
            
      
           
