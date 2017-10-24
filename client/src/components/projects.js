import React, { Component } from 'react';

class IndividProj extends Component {
          render () {
            return (
              <div className="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-md-5 col-md-ofset-1 col-lg-5 col-lg-offset-1 centerMeTimbers">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 borderBox" id="anchorFix">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <p id={this.props.title.replace(/\s/g, '').replace(/\'/g, '')} className="projTitle"><b>{this.props.title}</b></p>
                  </div>

                  <img onClick={()=>this.props.handleModal(this.props.indexValue)} style={{cursor:'pointer'}} src={this.props.imagePath} alt="Portfolio Image" className="img-responsive portImageGroup" />
                  <br/>
                  <a className="textAlignPort" href={this.props.gitLink} target="_blank">GitHub Repo</a>
                  <span> | </span>
                  <a href={this.props.gitSite} target="_blank">Application</a>
                </div>
              </div>
            );
          }
        };

        export default IndividProj;
