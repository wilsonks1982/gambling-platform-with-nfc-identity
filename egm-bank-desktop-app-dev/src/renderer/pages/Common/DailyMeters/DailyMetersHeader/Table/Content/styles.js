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
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    flexDirection: 'row',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    minHeight: 24,
    alignItems: 'center',
  },
  headerRow: {
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
  },
  headerCell: {
    margin: 0,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Roboto_FS',
  },
  cell: {
    margin: 0,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottom: '1px solid #ddd',
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Roboto_FS',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
});

export default styles;
