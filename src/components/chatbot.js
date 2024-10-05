import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

// all available theme props
const theme = {
  background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
  headerBgColor: '#FFFFFF',
  headerFontColor: '#3721A5',
  headerFontSize: '15px',
  botBubbleColor: '#3721A5',
  botFontColor: '#FFFFFF',
  userBubbleColor: '#FFFFFF',
  userFontColor: '#3721A5',
};

const config ={
    width: "400px",
    height: "500px",
    floating: true,
    headerTitle:"Weelo Chatbot",
  };

class WeeloChatbot extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    {
                        id:'intro', 
                        message:'Hi this is a Weelo\'s chatbot test, please type your name', 
                        trigger:'user-name',
                    },
                    {
                        id: 'user-name',
                        user: true,
                        trigger: 'hi-message',
                    },
                    {
                        id: 'hi-message',
                        message: 'Hi {previousValue}, nice to meet you!',
                        trigger: 'end-message',
                    },
                    {
                        id: 'end-message',
                        message:'Test ended, see you soon, thank you!', 
                        end: true,
                    }
               ]}
               {...config}
            />
        </ThemeProvider>
    );
  }
       
}

export default WeeloChatbot;
