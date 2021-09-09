import { connect } from 'react-redux'
import JList from '@/common/components/List/List'

const mapStateToProps = state => ({
    value: state.searchVal
})
export default connect(
    mapStateToProps
)(JList)

