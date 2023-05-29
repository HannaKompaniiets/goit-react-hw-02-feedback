import PropTypes from 'prop-types';

const Section = ({ title, children }) => { 
    return (
      <section>
         <h2>{title}</h2>
        {children}
     </section>
);
}

Section.proptypes = {
   title: PropTypes.string,
   children: PropTypes.object,
}

export default Section;