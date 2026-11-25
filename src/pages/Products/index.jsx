import Overview from './Overview'
import Membership from './Membership'
import Products from './Products'
import LoanSolutions from './LoanSolutions'
import SpecialisedLoans from './SpecialisedLoans'
import LoanPerformance from './LoanPerformance'

export default function ProductsPage() {
  return (
    <>
      <Overview>
        <Membership />
      </Overview>
      <Products />
      <LoanSolutions />
      <SpecialisedLoans />
      <LoanPerformance />
    </>
  )
}
