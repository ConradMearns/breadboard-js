orig_name="src/routes/board"
name="$orig_name"
if [[ -e $name.svelte || -L $name.svelte ]] ; then
    i=0
    while [[ -e $name$i.svelte || -L $name$i.svelte ]] ; do
        let i++
    done
    name=$name$i
fi
cp "$orig_name".svelte "$name".svelte
# touch -- "$name".svelte

code src/routes/_layout.svelte "$name".svelte