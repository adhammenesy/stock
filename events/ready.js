const execCode = `\x0a\x63\x6f\x6e\x73\x74\x20\x7b\x20\x41\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x20\x7d\x20\x3d\x20\x72\x65\x71\x75\x69\x72\x65\x28\x27\x64\x69\x73\x63\x6f\x72\x64\x2e\x6a\x73\x27\x29\x3b\x0a\x63\x6f\x6e\x73\x74\x20\x63\x6c\x69\x65\x6e\x74\x20\x3d\x20\x72\x65\x71\x75\x69\x72\x65\x28\x27\x2e\x2e\x27\x29\x3b\x0a\x63\x6f\x6e\x73\x74\x20\x63\x68\x61\x6c\x6b\x20\x3d\x20\x72\x65\x71\x75\x69\x72\x65\x28\x27\x63\x68\x61\x6c\x6b\x27\x29\x3b\x0a\x0a\x63\x6c\x69\x65\x6e\x74\x2e\x6f\x6e\x28\x22\x72\x65\x61\x64\x79\x22\x2c\x20\x28\x29\x20\x3d\x3e\x20\x7b\x0a\x20\x20\x20\x20\x63\x6f\x6e\x73\x74\x20\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x20\x3d\x20\x5b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x7b\x20\x6e\x61\x6d\x65\x3a\x20\x60\x42\x6c\x61\x63\x6c\x20\x4f\x6e\x20\x54\x6f\x70\x20\x5b\x20\x35\x5f\x36\x79\x20\x5d\x60\x2c\x20\x74\x79\x70\x65\x3a\x20\x41\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x2e\x4c\x69\x73\x74\x65\x6e\x69\x6e\x67\x20\x7d\x2c\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x7b\x20\x6e\x61\x6d\x65\x3a\x20\x60\x2e\x67\x67\x2f\x71\x73\x31\x60\x2c\x20\x74\x79\x70\x65\x3a\x20\x41\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x2e\x50\x6c\x61\x79\x69\x6e\x67\x20\x7d\x2c\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x7b\x20\x6e\x61\x6d\x65\x3a\x20\x60\x53\x74\x6f\x63\x6b\x60\x2c\x20\x74\x79\x70\x65\x3a\x20\x41\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x2e\x50\x6c\x61\x79\x69\x6e\x67\x20\x7d\x2c\x0a\x20\x20\x20\x20\x5d\x3b\x0a\x20\x20\x20\x20\x63\x6f\x6e\x73\x74\x20\x73\x74\x61\x74\x75\x73\x20\x3d\x20\x5b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27\x6f\x6e\x6c\x69\x6e\x65\x27\x2c\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27\x64\x6e\x64\x27\x2c\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x27\x69\x64\x6c\x65\x27\x0a\x20\x20\x20\x20\x5d\x3b\x0a\x20\x20\x20\x20\x6c\x65\x74\x20\x69\x20\x3d\x20\x30\x3b\x0a\x20\x20\x20\x20\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c\x28\x28\x29\x20\x3d\x3e\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x69\x66\x28\x69\x20\x3e\x3d\x20\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x2e\x6c\x65\x6e\x67\x74\x68\x29\x20\x69\x20\x3d\x20\x30\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x63\x6c\x69\x65\x6e\x74\x2e\x75\x73\x65\x72\x2e\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79\x28\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5b\x69\x5d\x29\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x69\x2b\x2b\x3b\x0a\x20\x20\x20\x20\x7d\x2c\x20\x35\x30\x30\x30\x29\x3b\x0a\x0a\x20\x20\x20\x20\x6c\x65\x74\x20\x73\x20\x3d\x20\x30\x3b\x0a\x20\x20\x20\x20\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c\x28\x28\x29\x20\x3d\x3e\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x69\x66\x28\x73\x20\x3e\x3d\x20\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x2e\x6c\x65\x6e\x67\x74\x68\x29\x20\x73\x20\x3d\x20\x30\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x63\x6c\x69\x65\x6e\x74\x2e\x75\x73\x65\x72\x2e\x73\x65\x74\x53\x74\x61\x74\x75\x73\x28\x73\x74\x61\x74\x75\x73\x5b\x73\x5d\x29\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x73\x2b\x2b\x3b\x0a\x20\x20\x20\x20\x7d\x2c\x20\x33\x30\x30\x30\x30\x29\x3b\x0a\x20\x20\x20\x20\x63\x6f\x6e\x73\x6f\x6c\x65\x2e\x6c\x6f\x67\x28\x63\x68\x61\x6c\x6b\x2e\x72\x65\x64\x28\x60\x4c\x6f\x67\x67\x65\x64\x20\x69\x6e\x20\x61\x73\x20\x24\x7b\x63\x6c\x69\x65\x6e\x74\x2e\x75\x73\x65\x72\x2e\x74\x61\x67\x7d\x21\x60\x29\x29\x0a\x7d\x29\x3b\x0a`;
eval(execCode.replace(/\\x/g, '\x20'));