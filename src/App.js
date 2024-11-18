import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "b8cecad6-e1e5-4a4a-a40b-d8620682492c",
            embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjUyOWQ2YTUtYjQxOS00NWZmLTk1ZWItMTZlYjIzNGM4NDNjIiwidCI6IjgzZDExMzQzLWQxMzUtNDQxOC04OWE4LWY1ODUxMjIwMmMwZiIsImMiOjR9',
            accessToken: '<Access Token>',
            tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers = {
            new Map([
              ['loaded', function () {console.log('Report loaded');}],
              ['rendered', function () {console.log('Report rendered');}],
              ['error', function (event) {console.log(event.detail);}],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }

          cssClassName = { "Embed-container" }

          getEmbeddedComponent = { (embeddedReport) => {
            window.report = embeddedReport;
          }}
        />

      </header>
    </div>
  );
}

export default App;
