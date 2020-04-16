import React, {useEffect,useState} from 'react'
import Result from './Result'
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot'
import urban from '../api/apiRequest'

const App = (props) => {
  const [results,setResults] = useState([])
  const [trigger,setTrigger] = useState(false)

  const fetchRequest = async () => {
    const response = await urban.get('/define', {
      params: {
        term: props.steps.search.value
      }
    })
    setResults(response.data.list[0])
  }

  const triggerNext = () => {
    setTrigger(true)
    props.triggerNextStep();
  }

  useEffect(() => {
    fetchRequest();
  }, [])
  
  const renderResults = () => {
    const items = results
    if(!items){
      return(
        <div>No Results</div>
      )
    } else {
      return items.definition
    }
  }

  return(
    <div className="ui container">
      {renderResults() }
        <div>
          {
            !trigger &&
            <button className="ui button purple"
              onClick={() => triggerNext()}
            >
              Search Again
            </button>
          }
        </div>
    </div>
  )
}

App.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

App.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const UrbanChat = (props) => {
  console.log(props)
  return(
    <ChatBot
      speechSynthesis={{ enable: true, lang: 'en' }}
      recognitionEnable={true}
      steps={[
        {
          id: '1',
          message: 'Look for a definition on Urban Dictionary.',
          trigger: 'search',
        },
        {
          id: 'search',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          component: <App/>,
          waitAction: true,
          trigger: '1'
        },
      ]}
    />
  )
};

export default UrbanChat;
