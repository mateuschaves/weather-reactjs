import { useTheme } from 'styled-components'
import ReactLoading from 'react-loading';
import { SearchBarContainer } from './styles'
import { IoMdSearch } from 'react-icons/io'

type Props = {
    searchText: string
    setSearchText: (text: string) => void
    onSearch: () => void
    loading?: boolean
}

export default function SearchBar({ searchText, setSearchText, onSearch, loading }: Props) {
    const theme = useTheme()

    function handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            onSearch()
        }
    }

    return (
        <SearchBarContainer>
            <IoMdSearch size={20} color={theme?.colors.gray300} />
            <input
                type="text"
                placeholder="Ex. Rua Padre antônio tomaz, Caruaru - PE"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            {loading && <ReactLoading type="spin" color={theme?.colors.gray300} height={20} width={20} />}
        </SearchBarContainer>
    )
}
