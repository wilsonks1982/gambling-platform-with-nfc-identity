import { Font, StyleSheet } from '@react-pdf/renderer';
import Roboto_TTF from '../../../../../../assets/fonts/Roboto/static/Roboto_Condensed-Regular.ttf';

Font.register({
  family: 'Roboto_FS',
  src: Roboto_TTF,
});


const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 20,
  },
  table: {
    display: 'table', // Changed to 'table' for semantic correctness
    width: '100%', // Take up the full width of the container
    borderCollapse: 'collapse', // Prevent double borders
  },
  row: {
    flexDirection: 'row', // Still use row layout
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
  },
  headerRow: {
    // Styles for the header row specifically
    backgroundColor: '#3498db', // A nice blue color
    color: 'white', // White text for contrast
  },
  headerCell: {
    // Styles for header cells
    margin: 0, // Reset default margins
    padding: 4, // Increased padding for better spacing
    fontWeight: 'bold', // Make header text bold
    textAlign: 'left', // Align header text to the left
    fontSize: 9, // Adjust font size
    textAlign: 'center',
    fontFamily: 'Roboto_FS'
  },
  cell: {
    margin: 0, // Reset default margins
    padding: 4, // Padding for cell content
    borderBottom: '1px solid #ddd',
    textAlign: 'left', // Align text to the left
    fontSize: 8, // Adjust font size
    textAlign: 'center',
    fontFamily: 'Roboto_FS'
  },
  evenRow: {
    // Style for even rows to create striped effect
    backgroundColor: '#f9f9f9',
  },
});

export default styles;
