  Now, just for beta!
  
  `npm i rn-simple-faq@latest`
  
  <img width="320" alt="image" src="https://media4.giphy.com/media/JQnILwMr5ShmXaFyH7/giphy.gif?cid=790b7611754acbeb5333463e846d21696d27e4c958e90e13&rid=giphy.gif&ct=g">
  
  -----
  **View example on Expo Snack:**
  https://snack.expo.dev/@eneselmal/greedy-cheese
  -----
  
  <a href="https://www.buymeacoffee.com/enesburakelmal" target="_blank" align="center"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" align="center"></a>
  
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
    import FaqComponent from 'rn-simple-faq';
    
    <FaqComponent
      faqData={arr}
      ontainerStyle={{ backgroundColor: '#131313' }}
      aqItemStyle={styles.listItem}
      controllerIconStyle={{
        color: '#fff',
        fontSize: 20,
      }}
      questionStyle={{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      }}
      answerStyle={{
        color: '#fff',
        fontSize: 14,
      }}
      controllerIconActiveStyle={{
        color: '#fff',
        fontSize: 20,
        }}
    />
  -----
          
 **Parameters:**        
          
    --------
      faqData = array format, this your FAQ data
      containerStyle = string format, main container style
      faqItemStyle = str  ing format, only one faq item style
      controllerIconStyle = string format, open-close controller style
      questionStyle = string format, question text style
      answerStyle= string format, answer text style
      controllerIconActiveStyle= string format, open-close controller active style
    --------
