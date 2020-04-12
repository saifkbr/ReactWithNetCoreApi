import { useMemo } from 'react'

export function useDatePicker(dateDisplayFormat,maxDateValue) {
    //const [date, setDate] = useState()
    const bind = useMemo(() => {
        return (
            {
                // selected: date,
                // onChange: e => { setDate(e) },
                dateFormat: dateDisplayFormat,
                maxDate:maxDateValue,
                isClearable: true
            }
        )
    }, [dateDisplayFormat,maxDateValue])
    return [bind]
}