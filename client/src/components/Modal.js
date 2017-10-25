import React, { Component } from 'react';
import Modal from 'react-modal';

class ProjModal extends Component {
  constructor(props) {
    super(props);
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
  }
  render() {
    // console.log(this.props.currentIndex, 'index is workingcurrentIndex');
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={this.customStyles}
          contentLabel="Project Modal">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1 id={this.props.projects[this.props.currentIndex].title} className="center"><b>{this.props.projects[this.props.currentIndex].title}</b></h1>
            <hr />
          </div>
          <div className="col-lg-12">
            <div className='col-lg-1'>
              <i className="fa fa-arrow-left arrowBox" onClick={()=>this.props.leftClick(this.props.currentIndex)} aria-hidden="true" id='leftArrow'></i>
            </div>
          <div className="col-lg-9">
            <div className="col-lg-5 col-lg-offset-1">
              <img src={this.props.projects[this.props.currentIndex].imagePath} alt="Portfolio" className="img-responsive portImageGroupModal" />
              <br/>
              <a className="textAlignPortTwo" href={this.props.projects[this.props.currentIndex].gitLink} target="_blank">GitHub Repo</a>
              <span> | </span>
              <a href={this.props.projects[this.props.currentIndex].gitSite} target="_blank">Application</a>
            </div>
            <div className="col-lg-6">
              <b><h3>Technologies Used:</h3></b>
              <p>{this.props.projects[this.props.currentIndex].technology}</p>
            </div>
          </div>
          <div className='col-lg-1'>
            <i className="fa fa-arrow-right arrowBox" onClick={()=>this.props.rightClick(this.props.currentIndex)} aria-hidden="true" id='leftArrow'></i>
          </div>
        </div>
          <i onClick={this.props.closeModal} className="fa fa-times" aria-hidden="true" id="closeBar"></i>
          <b><h3 className="clear">Project Concept:</h3></b>
          <p>{this.props.projects[this.props.currentIndex].description}</p>
        </Modal>
      </div>
    );
  }
}

export default ProjModal;
