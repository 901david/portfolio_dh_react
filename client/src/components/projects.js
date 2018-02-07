import React, { Component } from 'react';

class IndividProj extends Component {
  constructor(props) {
    super(props);
    const specificTag = this.props.title.replace(/\s/g, '').replace(/\'/g, '');
    this.appLinkTest = () => {
      console.log('git site', this.props);
      if(this.props.gitSite && this.props.gitLink !== "_") {
        return (
          <div className="centerMeTimbers">
            <div className="borderBox" id="anchorFix">
              <div className='port-title-fix'>
                <p id={specificTag} className="projTitle"><b>{this.props.title}</b></p>
              </div>

              <img onClick={()=>this.props.handleModal(this.props.indexValue)} style={{cursor:'pointer'}} src={this.props.imagePath} alt="Portfolio" className={`img-responsive portImageGroup ${specificTag}`} />
              <br/>
              <div className='port-bottom-text'>
              <a className="textAlignPort" href={this.props.gitLink} target="_blank">GitHub Repo</a>
                <span className='pipe-fix'> | </span>
               <a href={this.props.gitSite} target="_blank">Application</a>
             </div>
            </div>
          </div>
        );
      }
      else if (this.props.gitLink === "_") {
        return (
          <div className="centerMeTimbers">
            <div className="borderBox" id="anchorFix">
              <div className='port-title-fix'>
                <p id={specificTag} className="projTitle"><b>{this.props.title}</b></p>
              </div>

              <img onClick={()=>this.props.handleModal(this.props.indexValue)} style={{cursor:'pointer'}} src={this.props.imagePath} alt="Portfolio" className={`img-responsive portImageGroup ${specificTag}`} />
              <br/>
              <div className='port-bottom-text'>
               <a href={this.props.gitSite} target="_blank">Demo</a>
             </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div className="centerMeTimbers">
            <div className="borderBox" id="anchorFix">
              <div className='port-title-fix'>
                <p id={specificTag} className="projTitle"><b>{this.props.title}</b></p>
              </div>

              <img onClick={()=>this.props.handleModal(this.props.indexValue)} style={{cursor:'pointer'}} src={this.props.imagePath} alt="Portfolio" className={`img-responsive portImageGroup ${specificTag}`} />
              <br/>
              <div className='port-bottom-text'>
              <a href={this.props.gitLink} target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
        );
      }
    };
  };

          render () {


            return this.appLinkTest();
          }
        };

        export default IndividProj;
