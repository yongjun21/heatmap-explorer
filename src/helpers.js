export function generateAccessor (control, year) {
  if (!control || !year) return

  const accessors = control.items.map(item => {
    return d => {
      return item.keys.reduce((sum, path) => {
        return sum + get(d[year], path)
      }, 0)
    }
  })

  const exclude = control.threshold ? d => {
    return get(d[year], control.threshold[0]) < control.threshold[1]
  } : d => false

  const norm = control.normalize ? d => {
    return control.normalize.reduce((sum, path) => {
      return sum + get(d[year], path)
    }, 0)
  } : d => 1

  switch (control.type) {
    case 'radio':
      return selected => {
        return d => {
          try {
            if (exclude(d)) return null
            return accessors[selected](d) / norm(d)
          } catch (err) {
            return null
          }
        }
      }

    case 'checkbox':
      return selected => {
        return d => {
          try {
            if (exclude(d)) return null
            return selected.reduce((sum, index) => {
              return sum + accessors[index](d)
            }, 0) / norm(d)
          } catch (err) {
            return null
          }
        }
      }

    case 'range':
      return (selected) => {
        return d => {
          try {
            if (exclude(d)) return null
            return accessors.reduce((sum, accessor, index) => {
              if (index < selected[0] || index >= selected[1]) return sum
              return sum + accessor(d)
            }, 0) / norm(d)
          } catch (err) {
            return null
          }
        }
      }
  }
}

function get (d, path) {
  let value = d
  path.split('.').forEach(key => {
    value = value[key]
  })
  return value
}

export const querystring = {
  parse (qs) {
    const parsed = {}
    if (qs) {
      qs.slice(1).split('&').forEach(keyValue => {
        const [key, value] = keyValue.split('=')
        parsed[key] = value
      })
    }
    return parsed
  },
  stringify (query) {
    let stringified = []
    Object.keys(query).forEach(key => {
      const value = query[key] instanceof Array
        ? query[key].join(',')
        : query[key]
      if (value) stringified.push(key + '=' + value)
    })
    if (stringified.length > 0) stringified = '?' + stringified.join('&')
    return stringified
  }
}
