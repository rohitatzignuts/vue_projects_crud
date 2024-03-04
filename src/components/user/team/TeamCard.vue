
<template>
<v-card class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">

    
        <v-card-items>
            <div class="d-flex align-center justify-space-between pa-4">
                    <div class="d-flex">
                        <VAvatar 
                        size="large"                        
                        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAwFBMVEXq+v/o+v9h2vtl4v9i3P1j3v9m5f9n3Pxk4P/k+f/P9P+W6P7d9/9y3vzg+P/D8f514P3m+f/i+P/M8/+O5f3I8v5u3fxq3fzY9v9p3/6A4f257/627v6b6P6f6P1n5/+87/6y7f6S5/2J5P1t3/174PzT9P6i6v554f3a9v9o4v+v7P7F8v++8P595v525f5v4v5n3v6p6/2D4/1+4/6H4/3V9f+M6v+H6f9s5P9r4f9q5/+m6v5y5P7R9P/A8P7oQCwMAAAEN0lEQVRYw+2X15aiQBCGgY5kVDKSk4KO2VmdsO//Vtsm5uyVI3O1e/y9oAH9uqq6uqrlnnrqqaee+g/EjzK1rCWe+9Lgc12q5mzQizcICsBETP2GHIzkJWAy0mEf+6QClFFYruKVvD8/mdZL3EzkyG9e5vzjQDHEpcIueo7wJGETWDva+IHGcZJJQuVxoFK+tRdysMDOepgYQF2fOXy7fB318NjxrOuwMunKLxp/dn33++Vl/jhwJtj7240WrahndrfWr8X4caCO1GkXz8CjXijebkevvYCwAw70JbDJ8p3/EdAS1OqW4AbeSBH9SK/vZr8WwePAT4dYl5G7AaXLuTKa6N2i/O6RNsZbcOZNZerVM11vDbq57MPxx6/R48Bh/hZVybtZqgKEAqUIsqs9yaNkFHmy+7jLromIg+OYInZVVdWwbUdAFMeAEJgxUx+SqMsqhJAYu8ympeUqiqYpriWjIjcNcjI1m2sP1JnEhzG1SbNWxGC1TL52z/YgD7R14TlN3Gxm4jd5VY5iYiZV/hbye/Ug819xHXuL8bAmmZWYBT7K1bccnxcxkSVmZ0rVaQ2MPRtKkRn+Zga5MtjNXou1yImjsAFb/RtGJit8yTe+sr1QPayZYe0RAOCxmjWwjI98cclCMTXARL9bvF0b75SrgxmF0GcUnSBBEOCy5jmlhoJwSxprg/O7XmfAULotDOExZbUmA8JJ0N+zbTihanozS5+Q9N5iE1B3Y82nJfu+sqUX4EJnNzXKR106mKuJfgdogOwrt1VoVIyxuQJfLBaSjG47hrZbZdIdYEpXyW3+FqEm4rnh+8XlFQuumDiI1MPrjOuP4m5LFXfYGd88BjZUJY7fbwFbCmSwmfZmY6+upUF7X6Lofrea+hjK1bkiEhJs3jKelTKTILKZM2PHZLFmDYA/bZv8iLLvFAlNhtiJJE6sgS8GsJifc3ImaSeIf5BdmYSaKEUGPtbK9wpNsgUx2bXl25rTzMb/+pVS063Et8U2zAsMdvq3DxBa6gsxhtAMRnP7EHXxnS+XURWYDgL46LfDh+qXFaoQ4ViwCXTCdhwEwbiNJkiwHYyRoMq69vhRBJSm4SAMEKWYiQ0QxZRM8hLK0x5nmw0LoVjpaWQzSMk+DjxmqS6JXLvs01Om6mF+7fKOV58CaBzkS9iSPl2P/7TJ1YzhO/LagTVpcvcnfdkS7KrLTFDUG+BL3cnhI+0DVN3beGpCiLaz2zuJAfk+wH1XpiwHFRH3M+CIOFIH3yKI1Fb80XFuahzmt163xEZr0uOt9Cd9DpycmMfy2V3JRNgfcdPQw+V4eF5171V6HDgYIyfQlJlcxKtweuKkBm426ed0/OK99/lfoeSxoNowbvyEv6YmgwNie/TcVXpEMfMAcnbjzppTdzcI9bITrxdSktcu//cjTZpVQ+6pp5566ql/X38AmYlpr95+tigAAAAASUVORK5CYII=" />
                        
                        <v-card-title>
                            React Developers
                        </v-card-title>
                    </div>
                    <v-card-subtitle class="pa-0">
                        <VIcon>mdi-star-outline</VIcon>
                        <VIcon>mdi-dots-vertical</VIcon>
                    </v-card-subtitle>
            </div>
        </v-card-items>

        <v-card-text>
        We don't make assumptions about the rest of your technology stack, so you can develop new features in React.
        </v-card-text>

        <VCardItem>
            <div class="d-flex justify-space-between">
                <div class="v-avatar-group">
                    <VAvatar :size="35" color="primary" >
                    <VTooltip
                        activator="parent"
                        location="top"
                        >
                        John Doe
                    </VTooltip>
                    </VAvatar>
                    <VAvatar :size="35" color="primary" >
                    <VTooltip
                        activator="parent"
                        location="top"
                        >
                        John Doe
                    </VTooltip>
                    </VAvatar>
                    <VAvatar :size="35" color="primary" >
                    <VTooltip
                        activator="parent"
                        location="top"
                        >
                        John Doe
                    </VTooltip>
                    </VAvatar>
                </div>
                    <div class="demo-space-x">
                    <VChip 
                    label 
                    color="success"
                    class="mx-2">
                    Vue
                    </VChip>
    
                    <VChip
                    label
                    color="primary"
                    >
                    React
                    </VChip>
                </div>
            </div>
        </VCardItem>
    </v-card>
</template>