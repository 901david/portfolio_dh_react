import React, { Component } from 'react';
import Modal from 'react-modal';

class IndividProj extends React.Component {
          constructor() {
            super();

            this.state = {
              modalIsOpen: false
            };
            this.customStyles = {
              overlay : {
                position          : 'fixed',
                top               : 0,
                left              : 0,
                right             : 0,
                bottom            : 0,
                backgroundColor   : 'rgba(0, 0, 0, 0.75)'
              },
              content : {
                position                   : 'absolute',
                top                        : '50%',
                left                       : '50%',
                right                      : 'auto',
                bottom                     : 'auto',
                border                     : '1px solid #ccc',
                background                 : '#fff',
                overflow                   : 'auto',
                WebkitOverflowScrolling    : 'touch',
                borderRadius               : '4px',
                outline                    : 'none',
                padding                    : '20px',
                width                      : '88%',
                height                     : '88%',
                marginRight                : '-50%',
                transform                  : 'translate(-50%, -50%)'

              }

            };
            this.openModal = this.openModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
          }

          openModal() {
            this.setState({modalIsOpen: true});
          }

          closeModal() {
            this.setState({modalIsOpen: false});
          }
          render () {
            return (

              <div className="col-xs-8 col-xs-offset-3 col-sm-8 col-sm-offset-3 col-md-5 col-md-ofset-1 col-lg-5 col-lg-offset-1 centerMeTimbers">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 borderBox" id="anchorFix">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                    <p id={this.props.title.replace(/\s/g, '').replace(/\'/g, '')} className="projTitle"><b>{this.props.title}</b></p>
                  </div>

                  <img onClick={this.openModal} style={{cursor:'pointer'}} src={this.props.imagePath} alt="Portfolio Image" className="img-responsive portImageGroup" />
                  <br/>
                  <a className="textAlignPort" href={this.props.gitLink} target="_blank">GitHub Repo</a>
                  <span> | </span>
                  <a href={this.props.gitSite} target="_blank">Application</a>
                </div>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={this.customStyles}
                  contentLabel="Project Modal">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h1 id={this.props.title} className="center"><b>{this.props.title}</b></h1>
                    <hr />
                  </div>

                  <div className="col-lg-12">
                    <div className="col-lg-5 col-lg-offset-1">
                      <img src={this.props.imagePath} alt="Portfolio Image" className="img-responsive portImageGroupModal" />
                      <br/>
                      <a className="textAlignPort" href={this.props.gitLink} target="_blank">GitHub Repo</a>
                      <span> | </span>
                      <a href={this.props.gitSite} target="_blank">Application</a>
                    </div>
                    <div className="col-lg-6">
                      <b><h3>Technologies Used:</h3></b>
                      <p>{this.props.technology}</p>
                      <b><h3 className="clear">Project Concept:</h3></b>
                      <p>{this.props.description}</p>
                    </div>
                  </div>
                  <i onClick={this.closeModal} className="fa fa-times" aria-hidden="true" id="closeBar"></i>
                </Modal>
              </div>
            );
          }
        };

        export default IndividProj;
