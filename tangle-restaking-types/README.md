# Tangle Restaking Parachain Types

This package is meant to be updated alongside changes to the tangle restaking parachain runtime

The package builds the types against the tangle restaking parachain runtime.

### Update Types

In order to update types after making changes to the tangle api do the following:

- Run a local instance of the appropriate runtime. The types in this package correspond to the tangle restaking parachain runtime.

- Run the following yarn scripts:
```
yarn update:metadata
yarn build:interfaces
```

### Building the types package

After updating the types, run a build for the package with
```
yarn build
```