(function()
{
    "use strict"

    if (typeof Object.assign == "function") return

    var isEnumerable = {}.propertyIsEnumerable

    Object.defineProperty(Object, "assign",
    {
        value: function assign(target, sources)
        {
            if (target == null) throw new TypeError

            var to = Object(target)

            for (var index = 1; index < arguments.length ;)
            {
                var from = arguments[index++]
                if (from !== Object(from)) continue

                Reflect.ownKeys(from).forEach(function(key)
                {
                    if (isEnumerable.call(from, key))
                        to[key] = from[key]
                })
            }

            return to
        },
        writable: true,
        configurable: true
    })
})()
